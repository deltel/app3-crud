import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
@Entity()
export class Laptop extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    brand: string;

    @Field()
    @Column()
    model: string;
    
    @Field()
    @Column()
    ram: string;

    @Field()
    @Column()
    storage: string;
    
    @Field()
    @Column()
    display: string;
    
    @Field()
    @Column('bool')
    camera: boolean;
}