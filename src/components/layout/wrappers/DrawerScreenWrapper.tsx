import { DrawerHeader } from "../headers/DrawerHeader";
import { BaseScreenWrapper, BaseScreenWrapperProps } from "./BaseScreenWrapper";

export interface DrawerScreenWrapperProps extends Omit<BaseScreenWrapperProps, 'headerContent'> {
    title: string;
    showBack?: boolean;
    showMenu?: boolean;
    headerActions?: React.ReactNode;
  }
  
  export const DrawerScreenWrapper: React.FC<DrawerScreenWrapperProps> = ({
    title,
    showBack = true,
    showMenu,
    headerActions,
    ...rest
  }) => {
    return (
      <BaseScreenWrapper
        headerContent={
          <DrawerHeader
            title={title}
            showBack={showBack}
            showMenu={showMenu}
            actions={headerActions}
          />
        }
        {...rest}
    />
    );
  };