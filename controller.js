const pool = require('./db');
const queries = require('./query');

const getStudents = (req, res)=>{
    pool.query(queries.getStudents, (err, data) =>{
        if(err) throw err;
        res.status(200).json(data.rows);
    });
}

const getStudentById = (req, res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (err, data) =>{
        if(err) throw err;
        res.status(200).json(data.rows);
    });
}

const addStudent = (req, res)=>{
    const { name, email }= req.body;
    pool.query(queries.selectEmail, [email], (err, data) =>{
        if (data.rows.length){
            res.send("Email Already!!!");
        }
        else{
            pool.query(queries.addStudent, [name, email], (err, data) =>{
                if(err) throw err;
                res.status(201).send(`create student [${name}]`);
            })
        }
    })
}

const login = (req, res)=>{
    // console.log(req.body)
    const { email, password } = req.body;
    pool.query(queries.getUser, [email, password], (err, data)=>{
        if(err)
        console.log(err)
        if (data.rows.length)
        res.status(200).json(data.rows[0]);
        else
        res.send("Invalid")  
    })
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    login,
}