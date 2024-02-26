import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer QTO3jMb2sdIZs5InqvMcZu0fernpOMFRBQvQTRka5TT9BpmPcxCq5MhuRrIKUpIE1Vwbw7VF4EtwV7_ALb0PY7yQ1Nfg5voGDpXV5hSoKyktFvlkyb7i3XAkxYjcZXYx'
    }
})