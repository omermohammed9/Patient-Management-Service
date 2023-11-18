import  Patient  from '../entity/Patient';
import { PatientRepository } from '../repository/PatientRepository';
import UpdatePatientDto from "../dto/UpdatePatientDto";
import CreatePatientDto from "../dto/CreatePatientDto";

export class PatientService {
    private patientRepository: PatientRepository;

    constructor(patientRepository: PatientRepository) {
        this.patientRepository = patientRepository;
    }

    async createPatient(patientData: CreatePatientDto): Promise<Patient> {
        const patient = this.patientRepository.create(patientData);
        return this.patientRepository.save(patient);
    }

    async getPatientById(id: number): Promise<Patient | null> {
        return this.patientRepository.findOneBy({ id });
    }

    async getAllPatients(): Promise<Patient[]> {
        console.log('Fetching all patients from the database');
        const patients = await this.patientRepository.find();
        console.log(`Retrieved ${patients.length} patients`);
        return patients ;
    }

    async updatePatient(id: number, patientData: UpdatePatientDto): Promise<Patient> {
        const patient  = await this.patientRepository.findOneBy({ id });
        if (!patient) {
            throw new Error('Patient not found');
        }
        Object.assign(patient, patientData);
        return this.patientRepository.save(patient);
    }
   async deletePatient(id: number): Promise<void> {
        const patient = await this.patientRepository.findOneBy({ id });
        if (!patient) {
            throw new Error('Patient not found');
        }
        return this.patientRepository.delete(id);
   }
}
