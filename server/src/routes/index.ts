import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import scanRouter from './scan';
import notionRouter from './notion';
import v01Router from './v01';
import connectRouter from './connect';
import docsRouter from './docs';

const headRouter = express.Router();

headRouter.use(cors());
headRouter.use(express.json({ limit: '5mb' }));
if (process.env.NODE_ENV !== 'production') {
  headRouter.use(morgan('dev'));
}

headRouter.get('/', (_, res) => {
  res.send('🌿 Welcome to the Mintlify Connect API')
});

// Primary app
headRouter.use('/docs', docsRouter);
headRouter.use('/connect', connectRouter);
// GitHub
headRouter.use('/v01', v01Router);
// Integrations
headRouter.use('/notion', notionRouter);
// Cron job
headRouter.use('/scan', scanRouter);

export default headRouter;