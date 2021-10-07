import express, {Router} from 'express';
import axios from 'axios';

const app = express();
app.use(express.json())

const router = Router();

router.get('/test', async (request, response) => {
	try{
		console.time('reqTime')
		const airportsResponse = await axios.get('http://localhost:3004/test');
		console.timeEnd('reqTime')
		if(!airportsResponse.data || !airportsResponse.data.airports) {
			throw new Error("Couldn't communicate with airports service")
		}
	
		return response.json({ 
			booking: true, 
			airportsResponse: airportsResponse.data
		})

	} catch(err) {
		console.error(err)
		return response.status(500).json({'error': err.message})
	}

})

app.use(router);

app.listen(3002, () => console.log('booking running on port 3002'));