import { Repository, EntityRepository } from "typeorm";
import { Compliments } from "../entities/Compliments";

@EntityRepository(Compliments)
class ComplimentsRepositories extends Repository<Compliments> {}

export { ComplimentsRepositories };
