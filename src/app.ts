import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './modules/product/product.routes';
import { OrderRoutes } from './modules/order/order.routes';


const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes)

const getAController = (req: Request, res: Response) => {
  res.send("Hello Developer, this is  Assignment -2 Server ");
};

app.get('/', getAController);

export default app;