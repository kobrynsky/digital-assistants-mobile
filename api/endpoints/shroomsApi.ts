import { requests } from "../requests";

export const ShroomsApi = {
    checkShroom: (imageUrl): Promise<any> => {
        let localUri = imageUrl;
        let filename = localUri.split('/').pop();

        // Infer the type of the image
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;

        // Upload the image using the fetch and FormData APIs
        let formData = new FormData();
        // Assume "photo" is the name of the form field the server expects
        formData.append('shroom', { uri: localUri, name: filename, type });

        return requests.post(`shrooms/check`,
            formData,
            {
                headers: {
                    'content-type': 'multipart/form-data',
                }
            }
        )
    }
};

