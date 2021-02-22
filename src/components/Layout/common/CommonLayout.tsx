import React from 'react';

export interface ICommonLayoutProps{
    children?: React.ReactChild
    backgroundColor?: string
};

const CommonLayout:React.FC<ICommonLayoutProps> = ({ children, backgroundColor }: ICommonLayoutProps) => {
    return (
        <div>
            <h2>Common Layout</h2>
            <div style={{
                "backgroundColor": backgroundColor
            }}>
                {children}
            </div>  
        </div>
    );
}

export default CommonLayout
