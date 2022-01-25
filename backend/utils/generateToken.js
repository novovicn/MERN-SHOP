import jwt from 'jsonwebtoken';


const genereateToken = (id) => {
    let token = jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30h'
    })
    return token
}

export default genereateToken