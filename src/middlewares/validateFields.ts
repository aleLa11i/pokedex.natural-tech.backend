import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

const validateFields = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log('Validation errors', errors.mapped());
    return res.status(400).json({
      data: null,
      errors: errors.mapped(),
    });
  }

  next();
};

export default validateFields;
