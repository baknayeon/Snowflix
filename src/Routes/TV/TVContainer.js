import React from "react"
import TVPresenter from "./TVPresenter"
import { tvApi } from "api"
export default class extends React.Component{

    state = {
        topRalted: null,
        popular: null,
        airingToday: null,
        loading: true,
        error: null
    }

    async componentDidMount(){
        try{
            const {data: {results: topRated}}  = await tvApi.topRated();
            const {data: {results: popular}} = await tvApi.popular();
            const {data: {results: airingToday}} = await tvApi.airingToday();
            
            this.setState({
                topRated,
                popular,
                airingToday
            })
        }catch{
            this.setState({
                error:"can't get TV imformation"
            })
        }finally{
            this.setState({
                loading:false
            })
        }
    }

    render(){
        const { topRalted, popular, airingToday, loading, error } = this.state
        console.log(this.state)
        
        return <TVPresenter
        topRalted = {topRalted}
        popular = {popular}
        airingToday = {airingToday}
        loading = {loading}
        error = {error}
        />
    }
}