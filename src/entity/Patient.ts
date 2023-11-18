import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity()
class Patient extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({type: 'varchar', nullable: true})
    gender!: string;

    @Column()
    dateOfBirth!: Date;

    @Column({ nullable: true })
    phoneNumber!: string;

    @Column({ nullable: true })
    email!: string;

    @Column({ nullable: true })
    address!: string;

    @Column({ nullable: true })
    emergencyContactName!: string;

    @Column({ nullable: true })
    emergencyContactPhone!: string;

    @Column({ nullable: true })
    bloodType!: string;

    @Column({ nullable: true, type: 'simple-array' })
    allergies!: string[];

    @Column({ nullable: true })
    medicalConditions!: string;

    @Column({ unique: true, nullable: true })
    nationalId!: string;


    @CreateDateColumn()
    createdDate!: Date;

    @UpdateDateColumn()
    lastUpdated!: Date;

}
export default Patient;