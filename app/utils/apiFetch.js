
import { setApiCallError } from 'containers/LoginPage/actions';

const apiFetch = (url, dispatch, body, method = 'POST') => {
    const fetchBody = {
        method,
        cache: 'no-cache',
        credentials: 'include',
    };

    if (body) {
        fetchBody['body'] = JSON.stringify(body);
    }

    return new Promise((resolve, reject) => (
        fetch(url, fetchBody).then((response) => {
            if (response.status !== 200) {
                dispatch(setApiCallError());
                reject('Bad code');
            }
            return response.json();
        })
        .then((data) => resolve(data))
        .catch(() => {
            dispatch(setApiCallError());
            reject('Bad code');
        })
    ));
};

export default apiFetch;