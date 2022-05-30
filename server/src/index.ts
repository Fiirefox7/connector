import { ApplicationFunctionOptions, Context, Probot } from "probot";
import './services/mongoose';
import { getReviewComments, checkIfAllAlertsAreResolve, createSuccessCheck, createActionRequiredCheck, createInProgressCheck } from "./helpers/github/octokit";
import headRouter from "./routes";
import { createReviewCommentsFromAlerts, filterNewAlerts, getAlerts, getAllFilesAndMap } from "./helpers/github/app";

export = (app: Probot, { getRouter }: ApplicationFunctionOptions) => {
  app.on(["pull_request.opened", "pull_request.reopened", "pull_request.synchronize"], async (context) => {
    console.log({context});
    await createInProgressCheck(context);

    const { files, filesPatchLineRangesMap } = await getAllFilesAndMap(context);
    const { incomingAlerts, previousAlerts } = await getAlerts(context, files);
    console.log({files})
    console.log({incomingAlerts})
    console.log({previousAlerts})

    if (incomingAlerts == null) {
      return;
    }

    const newAlerts = filterNewAlerts(previousAlerts, incomingAlerts);
    const isAllPreviousAlertsResolved = checkIfAllAlertsAreResolve(previousAlerts);
    if (newAlerts.length === 0 && isAllPreviousAlertsResolved) {
      await createSuccessCheck(context);
      return;
    };

    await createReviewCommentsFromAlerts(context, newAlerts, filesPatchLineRangesMap);
    // Create tasks using review comments
    // const taskRequests = reviewComments.map(())
    await createActionRequiredCheck(context, newAlerts[0]?.url);
    return;
  });

  app.on(['pull_request_review_thread.resolved', 'pull_request_review_thread.unresolved'] as any, async (context: Context) => {
    await createInProgressCheck(context);
    const previousAlerts = await getReviewComments(context);
    const isAllPreviousAlertsResolved = checkIfAllAlertsAreResolve(previousAlerts);

    if (isAllPreviousAlertsResolved) {
      await createSuccessCheck(context);
    } else {
      await createActionRequiredCheck(context);
    }
  });

  const router = getRouter!("/routes");
  router.use(headRouter);
};