import express from 'express';
import cors from 'cors';
import shipmentRouter from './routes/shipments';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/shipments', shipmentRouter);

export default app;
