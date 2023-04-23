import { createSelector } from '@reduxjs/toolkit';
import { StateScheme } from '@/app/providers/StoreProvider';
import { UserRole } from '../../consts/UserRoleConsts';

export const getUserRole = (state: StateScheme) => state.user.authData?.role;

export const isAdmin = createSelector(getUserRole, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
export const isManager = createSelector(getUserRole, (roles) => Boolean(roles?.includes(UserRole.MANAGER)));
