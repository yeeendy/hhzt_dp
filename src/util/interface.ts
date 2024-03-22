// export interface BottomButtonProps {
//     // onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
//     // (property) onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
// }

// props: PolymorphicComponentProps<"web", Substitute<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, BottomButtonProps>, void, void, {}, {}>): Element'

export interface BottomButtonProps {
    // disabled?: boolean;
    [key: string]: any
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface SignUpResponse {
    status: boolean;
}

export interface SignUpUser {
    id?: string,
    pw?: string,
    nickname?: string
}

export interface LoginUser {
    id: string,
    pw: string
}