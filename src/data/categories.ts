import { Category } from "../types/Category";

export const categories: Category = {
  comida: { 
    title: 'Alimentação', 
    color: 'blue',
    expense: true,
   },
   conta: {
    title: 'Aluguel', 
    color: 'brown', 
    expense: true,
   },
   salario: { 
    title: 'Salário', 
    color: 'green', 
    expense: false
  }
}