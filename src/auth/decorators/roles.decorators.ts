import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/common/constants/roles';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
