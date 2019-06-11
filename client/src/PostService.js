// Importing Dependencies
import axios from 'axios';

// Declaring Endpoint of API
const url = 'http://localhost:3000/api/posts';

// Post Service Class Handling Requests
export default class PostService {
    // GET Posts
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(data.map(el => ({
                    ...el,
                    createdAt: new Date(el.createdAt)
                })));
            } catch (err) {
                reject(err);
            }
        });
    }
    // Create Post
    static insertPost(text) {
        return axios.post(url, { text });
    }
    // Delete Post
    static deletePost(id) {
        return axios.delete(`${url}/${id}`);
    }
}