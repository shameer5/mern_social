import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => { 
    try{
        const token = req.headers.authorization.split(" ")[1];
        /* Less than 500 is JWT token, More the 500 is google token */
        const typeAuth = token.length < 500
        let decodedData;
        if(token && typeAuth){
            decodedData = jwt.verify(token, 'creatingTest...')
            req.userId = decodedData?.id
            
        } else {
            decodedData = jwt.decode(token);
            /* .sub is googles id param to diffrentiate each user */
            req.userId = decodedData?.sub
        }

        next();
    } catch(error) {
        console.log(error)
    }
}

export default auth;