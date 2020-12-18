import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "556f597a-4931-4dc9-aa24-4fba87ed0759"
    }
});


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(
            response => {
                return response.data;
            }
        )
    },
    auth() {
        return instance.get(`auth/me`).then(
            response => {
                return response.data;
            }
        )
    },
    getProfileData(userID) {
        console.log("plese use profileAPI");
        return profileAPI.getProfileData(userID)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(
            response => {
                return response.data;
            }
        )
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(
            response => {
                return response.data;
            }
        )
    }
};


export const profileAPI = {
    getProfileData(userID) {
        return instance.get(`profile/` + userID)
    },
    getStatus(userID) {
        return instance.get(`/profile/status/` + userID)
    },
    updateStatus(status) {
        return instance.put(`/profile/status/`, {status: status})
    }

};

export const loginAPI = {
    login(email, password, rememberMe = false) {
        return instance.post(`/auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`/auth/login`);
    }
};