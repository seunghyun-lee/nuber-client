import React from "react";
import { Mutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { facebookConnect, facebookConnectVariables } from "../../types/api";
import SocialLoginPresenter from "./SocialLoginPresenter";
import { FACEBOOK_CONNECT } from "./SocialLoginQueries";

interface IState {
    firstName: string;
    lastName: string;
    email: string;
    fbId: string;
}

interface IProps extends RouteComponentProps<any> {}

class LoginMutation extends Mutation<
    facebookConnect,
    facebookConnectVariables
> {}

class SocialLoginContainer extends React.Component<IProps, IState> {
    public render() {
        return (
            <LoginMutation mutation={FACEBOOK_CONNECT}>
                    <SocialLoginPresenter />
            </LoginMutation>
        );
    }
}

export default SocialLoginContainer;