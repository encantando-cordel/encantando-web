import React, { Component } from 'react';
import './Editor.css';

export default class Editor extends Component {
    render() {
        return (
            <div className="main editor"> 
                <div className="text-container">
                    <textarea rows="10"></textarea>
                </div>
            </div>
        )
    }
}