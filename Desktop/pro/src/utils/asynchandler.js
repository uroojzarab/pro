//promice
const asynchandler = (fun) => {
  (req, res, next) => {
    res.resolve(fun(req, res, next)).catch((error) => next(error));
  };
};

//try catch

/*
const asynchandler=(fun)=>asyn(req,res,next)=>{
try {
    await fun(req,res,next)
} catch (error) {
    res.status(500).json({
        success:false,
        message:error.message
    })
}
}*/
