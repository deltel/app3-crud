import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Laptop } from '../entities/Laptop';
import { LaptopInput, UpdateLaptopInput } from '../inputs/LaptopInput';

@Resolver()
export class LaptopResolver {
    @Query(() => String)
    hello(): String {
        return "Hello World!";
    }

    @Mutation(() => Laptop)
    async addLaptop(
        @Arg("laptopInput") { brand, camera, display, model, ram, storage }: LaptopInput
    ): Promise<Laptop> {
        let laptop = new Laptop();
        laptop.brand = brand;
        laptop.camera = camera;
        laptop.display = display;
        laptop.model = model;
        laptop.ram = ram;
        laptop.storage = storage;

        await laptop.save();
        return laptop;
    }

    @Query(() => Laptop, { nullable: true })
    async getLaptop(
        @Arg("id") id: number
    ): Promise<Laptop | null> {
        const laptop = (await Laptop.find({ where: { id: id } }))[0];
        if (!laptop) {
            return null;
        }

        return laptop;
    }

    @Mutation(() => Boolean)
    async removeLaptop(
        @Arg("id") id: number
    ): Promise<Boolean> {
        const laptop = (await Laptop.find({ where: { id: id } }))[0];
        if (!laptop) {
            return false;
        }
        await Laptop.delete({ id: id });
        return true;
    }

    @Mutation(() => String, { nullable: true })
    async updateLaptop(
        @Arg("id") id: number,
        @Arg("updateLaptopInput") updateLaptopInput: UpdateLaptopInput
    ): Promise<String> {
        await Laptop.update({ id: id }, updateLaptopInput);
        
        // if (!laptop) {
        //     return null;
        // }
        return "laptop updated";
    }
}
