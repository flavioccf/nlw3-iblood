import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import BloodDonation from './BloodDonation';

@Entity('images')
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    path: string;

    @ManyToOne(() => BloodDonation, blood_donation => blood_donation.images)
    @JoinColumn({ name: 'blood_donation_id'})
    blood_donation: BloodDonation;
}