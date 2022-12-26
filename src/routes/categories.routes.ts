import { Router } from "express"



import { CategoriesRepository } from "../repositories/CategoriesRepository"
import { CreateCategoryService } from "../services/CreateCategoryService"
import { PostgresCategoriesRepository } from "../repositories/PostgresCategoriesRepository"


const categoriesRoutes = Router()
const categoriesRepository = new PostgresCategoriesRepository()

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body

    const createCategoryService = new CreateCategoryService(categoriesRepository)  
    createCategoryService.execute({ name,description})  //Separei a responsabilidade e deixei para o servico
    return response.status(201).send()
})

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list()
    return response.json(all)
})

export { categoriesRoutes }
