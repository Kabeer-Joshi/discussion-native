import { BaseHeader } from "../headers/BaseHeader";
import { BaseScreenWrapper, BaseScreenWrapperProps } from "./BaseScreenWrapper";

export interface StackScreenWrapperProps extends Omit<BaseScreenWrapperProps, 'headerContent'> {
    title: string;
    showBack?: boolean;
    headerActions?: React.ReactNode;
  }
  
  export const StackScreenWrapper: React.FC<StackScreenWrapperProps> = ({
    title,
    showBack,
    headerActions,
    ...rest
  }) => {
    return (
      <BaseScreenWrapper
        headerContent={
          <BaseHeader
            title={title}
            showBack={showBack}
            actions={headerActions}
          />
        }
        {...rest}
      />
    );
  };