import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Image';

@Entity('blood_donations')
export default class BloodDonation {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    name: string;
    @Column({ type: 'decimal'})
    latitude: number;
    @Column({ type: 'decimal'})
    longitude: number;
    @Column()
    about: string;
    @Column()
    instructions: string;
    @Column()
    work_hours: string;

    @OneToMany(() => Image, image => image.blood_donation, {
        cascade: ['insert','update']
    })
    @JoinColumn({ name: 'blood_donation_id' })
    images: Image[];
}