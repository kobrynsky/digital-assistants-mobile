import { requests } from "../requests";

export const AuthApi = {
    login: (body): Promise<any> => requests.get(`token`,
        {
            auth: {
                username: body.username,
                password: body.password,
            }
        },
    ),

    register: (body): Promise<any> => {
        return requests.post(`/users`, body)
    }
};
