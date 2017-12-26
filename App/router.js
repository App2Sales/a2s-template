import { StackNavigator, TabNavigator, TabBarTop } from 'react-navigation';
import {
    HomeScreen,
    OnboardingScreen
} from './screens';
import { colors } from './config';

const MainTabNavigator = TabNavigator(
    {
        HOME: { screen: HomeScreen }
    },
    {
        tabBarComponent: TabBarTop,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            showLabel: true,
            activeTintColor: colors.activeColor,
            inactiveTintColor: colors.inactiveColor,
            upperCaseLabel: false,
            tabStyle: {
                elevation: 10
            },
            labelStyle: {
                width: '100%',
                fontSize: 10
            },
            style: {
                backgroundColor: colors.tabBackground,
                borderTopWidth: 1,
                borderTopColor: colors.tabBorderColor
            },
            indicatorStyle: {
                borderColor: colors.activeColor,
                borderWidth: 2,
                top: 0,
                position: 'absolute'
            }
        }
    }
);

const Router = StackNavigator({
    ONBOARDING: { screen: OnboardingScreen },
    TABS: { screen: MainTabNavigator }
});

export default Router;
