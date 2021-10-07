import express, {Router} from 'express';

const app = express();
app.use(express.json())

const router = Router();

router.get('/test', (request, response) => {
	return response.json({ airports: true})
})

app.use(router);

app.listen(3004, () => console.log('airports running on port 3004'));