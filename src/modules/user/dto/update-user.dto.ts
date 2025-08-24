import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({ example: 'newname@example.com' })
  email?: string;

  @ApiPropertyOptional({ example: 'Jane Doe' })
  fullName?: string;

  @ApiPropertyOptional({ example: 'newpassword123' })
  password?: string;
}
