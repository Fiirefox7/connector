// https://www.notion.so/mintlify/Connect-d9d337715f974520a793da685b056415
import express from 'express';
import { Alert, AlertsRequest } from '../helpers/github/types';
import { createNewLinksMessage, getAlertsForAllFiles } from '../helpers/routes/v01Alerts';
import { track } from '../services/segment';
import AuthConnector, { AuthConnectorType } from '../models/AuthConnector';
import { sha512Hash } from '../helpers/routes/hash';

const v01Router = express.Router();

export const getAuthConnector = async (sourceId: string): Promise<AuthConnectorType | null> => {
    const hashedSourceId = sha512Hash(sourceId);
    const authConnector = await AuthConnector.findOne({hashedSourceId});
    return authConnector;
}

v01Router.post('/', async (req, res) => {
    const alertsRequest: AlertsRequest = req.body;
    const { files, owner } = alertsRequest;

    if (files == null) return res.status(400).end();
    if (owner == null) return res.status(400).end();

    const authConnector = await getAuthConnector(owner) || undefined;
    const allAlerts = await getAlertsForAllFiles(files, authConnector);
    const alerts = allAlerts.filter((alert) => alert.type !== 'new');

    const newLinks: Alert[] = allAlerts.filter((alert) => alert.type === 'new');
    const newLinksMessage = newLinks.length > 0 ? await createNewLinksMessage(newLinks, authConnector) : null;

    // logging
    const isAlerting = alerts.length > 0;
    const alertEvent = isAlerting ? 'Connect Alert' : 'Connect Not Alert';

    track(owner, alertEvent, {
        numberOfFiles: files.length,
        numberOfAlerts: alerts.length
    });

    // Still needs work
    return res.status(200).send({
        alerts,
        newLinksMessage
    });
});

v01Router.get('/install', async (req, res) => {
    const { installation_id } = req.query;
    track(installation_id as string, 'Install Connect GitHub App');
    return res.redirect('https://mintlify.notion.site/Mintlify-Connect-c77063caf3f6492e85badd026b769a69');
})

export default v01Router;