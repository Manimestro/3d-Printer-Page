import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';
const productSlice=createSlice({
    name:"productdataSlice",
    initialState:{
        type:["Material","Printer","Infill",],
        Material:["ABS","PLA","PETG","PLA GLASS", "Luminous"],
        ABS:[["black","black"],["blue","#1d4ed8"],["green","#064e3b"],["grey","#475569"],["orange","#f97316"],["natural","#e2e8f0"],["Red","#b91c1c"],["Yellow","#fde047"],["White","#fffbeb"]],
        PLA:[["black","#020617"],["Blue","#60a5fa"],["yellow","#fcd34d"],["white","white"],["Natural","#fafafa"]],
        PETG:[["black","#0a0a0a"],["Blue","#3730a3"],["Blue","#60a5fa"],["Yellow","#fde047"],["Green","#16a34a"],["Red","#b91c1c"],["Grey","#6b7280"],["Silver","#808080"],["White"," #FFFFFF"],["Gold","#FFD700"],["Purple","#A020F0"],["Pink","#FFC0CB"],["Brown","#964B00"],["Beige","#F5F5DC"]],
        "PLA GLASS":[["Leman Yellow","#fef08a"],["Glass Orange","#fed7aa"],[ "Watermelon Red","#ec4899"]],
        Luminous:[["Luminous Rainbow","#eef2ff"]]
    ,
    Infill:[]
    ,
    Printer:
       ["0.2mm Standard Quality","0.5mm medium quality","0.1mm High Quality","0.05mm ultra High Quality"] 
    ,
         selectedMaterial:"ABS"
         ,selectedColor:["Black","black"],
         selectedinfill:50
         ,selectedPrinter:"0.2mm Standard Quality"
                },
    reducers:{
        setSelectedColor(state,action){
                state.selectedColor=action.payload
        },
        setSelectedMaterial(state,action){
            state.selectedMaterial=action.payload
       },
       setSelectedinfill(state,action){
        state.selectedinfill=action.payload
        },
        setSelectedPrinter(state,action){
            state.selectedPrinter=action.payload
        },

    }
})
export const {setSelectedColor,setSelectedMaterial
    ,setSelectedinfill,setSelectedPrinter}= productSlice.actions
const productReducer=productSlice.reducer
export const useProductData=()=>useSelector(state=>state.productdataSlice)
export  default productReducer