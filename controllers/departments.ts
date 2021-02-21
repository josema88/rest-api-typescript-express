import { Request, Response } from "express";
import Department from "../models/department";


export const getDepartments = async( req: Request, res: Response ) => {
    try {
        const departments = await Department.findAll();
        res.json(departments);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error, contact API administrator'
        });
    }
}

export const getDepartment = async( req: Request, res: Response ) => {
    const { id } = req.params;
    try {
        const department = await Department.findByPk(id);
        if (department) {
            res.json(department);
        } else {
            res.status(404).json({
                msg: `Department with id ${id} not found`
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error, contact API administrator'
        });
    }
}

export const createDepartment = async( req: Request, res: Response ) => {
    const { body } = req;
    try {
        const department = await Department.create({
            name: body.name,
            description: body.description,
        });
        res.json(department);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error, contact API administrator'
        });
    }
}

export const updateDepartment = async( req: Request, res: Response ) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const result = await Department.update({
            name: body.name,
            description: body.description
        }, {
            where: {
              id
            }
        });
        if ( Number(result) === 1 ) {
            res.json({
                msg: `Department with id ${id} updated`
            })
        } else {
            res.status(404).json({
                msg: `Department with id ${id} not found`
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error, contact API administrator'
        });
    }
}

export const deleteDepartment = async( req: Request, res: Response ) => {
    const { id } = req.params;
    try {
        const result = await Department.destroy({
            where: {
                id
            }
        });
        console.log('Result: ' + result);
        if ( result ) {
            res.json({
                msg: `Department with id ${id} deleted`
            })
        } else {
            res.status(404).json({
                msg: `Department with id ${id} not found`
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error, contact API administrator'
        });
    }
}