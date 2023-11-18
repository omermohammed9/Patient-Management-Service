import {
    ArrayMaxSize,
    ArrayNotEmpty,
    IsEmail,
    IsIn,
    IsNotEmpty,
    IsOptional,
    IsPhoneNumber,
    IsString,
    Length
} from 'class-validator';

 class CreatePatientDto {
     @IsNotEmpty()
     @Length(3, 100)
     name!: string;

     @IsNotEmpty()
     @Length(5, 7)
     gender!: string;

     @IsNotEmpty()
     dateOfBirth!: Date;

     @IsOptional()
     @IsNotEmpty()
     @Length(10, 20)
     @IsPhoneNumber(undefined , { message: 'Invalid phone number' })
     phoneNumber?: string;

     @IsOptional()
     @IsNotEmpty()
     @Length(10, 100)
     @IsEmail()
     email?: string;

     @IsOptional()
     @IsNotEmpty()
     @Length(10, 250)
     address?: string;

     @IsOptional()
     @IsNotEmpty()
     @Length(2, 100)
     emergencyContactName?: string;

     @IsOptional()
     @IsNotEmpty()
     @Length(10, 100)
     @IsPhoneNumber()
     emergencyContactPhone?: string;

     @IsOptional()
     @IsNotEmpty()
     @IsIn(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
     bloodType?: string;

     @IsOptional()
     @ArrayNotEmpty()
     @IsString({ each: true })
     @ArrayMaxSize(20)  // Limit the number of entries if needed
     allergies?: string[];


     @IsOptional()
     @IsNotEmpty()
     @Length(3, 255)
     medicalConditions?: string;


     @IsOptional()
     @IsNotEmpty()
     @Length(10, 100)
     nationalId?: string;


 }
export default CreatePatientDto;