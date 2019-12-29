import React from "react"
import SearchPresenter from "./SearchPresenter"
import {moviesApi, tvApi} from "api"

export default class extends React.Component{

    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        loading: false,
        error: null
    }

    handleSubmit = () =>{
        const {searchTerm} = this.state
        
        if(searchTerm !== ""){
            this.searchByTerm()
        }
    }

    searchByTerm = async () =>{
        
        try{
            const {searchTerm} = this.state
            this.setState({
                loading: true
            })
            const {data: {results :tvResults }} = await tvApi.searchTv(searchTerm)
            const {data: {results :movieResults }} = await moviesApi.searchMovie(searchTerm)
            this.setState({
                tvResults,
                movieResults
            })
        }catch{
            this.setState({
                error:"can't find result"
            })
        }finally{
            this.setState({
                loading: false
            })
        }


    }

    render(){
        const { movieResults, tvResults, searchTerm, loading, error} = this.state
        return <SearchPresenter 
        movieResults = {movieResults}
        tvResults = {tvResults}
        searchTerm = {searchTerm}
        loading = {loading}
        error = {error}
        handleSubmit = {this.handleSubmit}
        />
    }
    
}