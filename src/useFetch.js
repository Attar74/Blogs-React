import { useState, useEffect } from 'react';

const useFetech = (url) => {
    const [data, setdata] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const abortConst = new AbortController();
        fetch(url, { signal: abortConst.signal }).then(res => {
            if (!res.ok) {
                throw Error('Couldn\'t fetch the data');
            }
            return res.json()
        }).then(data => {
            setdata(data);
            setIsPending(false);
            setError(null);
        }).catch(err => {
            if (err.name === 'AbortError') {
                console.log("fetch Aborted")
            } else {
                setError(err.message);
                setIsPending(false);
            }
        })
        return () => { abortConst.abort() };
    }, [url]);
    return { data, isPending, error }
}

export default useFetech;