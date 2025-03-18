import app from "./app/app";

/* SERVER MODE can be run in local, EC2 or fargate ECS*/
const port = Number(process.env.PORT) || 3001;
app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
});