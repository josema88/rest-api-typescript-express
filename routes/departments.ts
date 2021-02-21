import { Router } from 'express';
import { getDepartments, getDepartment, createDepartment, updateDepartment, deleteDepartment } from '../controllers/departments';

const router = Router();

router.get('/', getDepartments);
router.get('/:id', getDepartment);
router.post('/', createDepartment);
router.put('/:id', updateDepartment);
router.delete('/:id', deleteDepartment);

export default router;