import axios from "axios";

export default axios.create(
    {
        Url:"https://api.unsplash.com/",
    headers:{
        Authorization:"Client-ID <ACCESS KEY>"
    }
    }
)