require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.post("/create-todo", async (req, res) => {
	try {
		const { description } = req.body;
		const query = await pool.query("insert into todos(description) values($1);", [description]);
	} catch (err) {
		console.error(err);
	}
});

app.get("/todos", async (req, res) => {
	try {
		const query = await pool.query("select * from todos order by todo_id;");
		res.json(query.rows);
	} catch (err) {
		console.error(err);
	}
});

app.get("/todo/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const query = await pool.query("select * from todos where todo_id=$1", [id]);
		res.json(query.rows);
	} catch (err) {
		console.log(err);
	}
});

app.put("/update-todo/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { description, is_done } = req.body;
		const query = await pool.query("update todos set description=$1, is_done=$2 where todo_id=$3;", [description, is_done, id]);
	} catch (err) {
		console.error(err);
	}
});

app.delete("/delete-todo/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const query = await pool.query("delete from todos where todo_id=$1;", [id]);
	} catch (err) {
		console.error(err);
	}
});

app.listen(process.env.HOSTPORT);