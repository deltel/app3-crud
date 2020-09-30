import { InputType, Field, ID } from "type-graphql";
import { Laptop } from "../entities/Laptop";

@InputType({ description: "Laptop specs for adding a laptop" })
export class LaptopInput implements Partial<Laptop> {
    @Field()    
    brand: string;

    @Field()
    model: string;
    
    @Field()
    ram: string;

    @Field()
    storage: string;
    
    @Field()
    display: string;
    
    @Field()
    camera: boolean;
} 

@InputType({ description: "Laptop specs for updating a laptop" })
export class UpdateLaptopInput implements Partial<Laptop> {
    // @Field(() => ID)    
    // id: number;

    @Field({nullable: true})    
    brand?: string;

    @Field({nullable: true}) 
    model?: string;
    
    @Field({nullable: true}) 
    ram?: string;

    @Field({nullable: true}) 
    storage?: string;
    
    @Field({nullable: true}) 
    display?: string;
    
    @Field({nullable: true}) 
    camera?: boolean;
} 

