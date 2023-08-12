import axios from "axios";

export default axios.create({
  Url: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID a3bb3vaS6vozyh33k5x0EDnBfzLnzmrxLjybTS9I0bA",
  },
});