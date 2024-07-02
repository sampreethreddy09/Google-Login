import React from 'react';
import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stepper1 from './Stepper1';
import Stepper2 from './Stepper2';
import Stepper3 from './Stepper3';
import '../App.css'

const steps = ['Personal Details', 'Professional Details', 'Required Documents'];

function Home() {
    const state = useLocation();
    const name = state.state.decoded.name

    const [step1data, setStep1Data] = React.useState({
        name: "",
        age: 0,
        status: 'NoOption'
    })

    const handleStep1Data = (event) => {
        const { name, value } = event.target;
        setStep1Data((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const [step2data, setStep2Data] = React.useState({
        role: "",
        experience: 0,
        payrange: 'NoOption'
    })

    const handleStep2Data = (event) => {
        const { name, value } = event.target;
        setStep2Data((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);


        localStorage.setItem('step1data', JSON.stringify(step1data));
        localStorage.setItem('step2data', JSON.stringify(step2data));
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
        setStep1Data({
            name: "",
            age: 0,
            status: 'NoOption'
        });
    
        setStep2Data({
            role: "",
            experience: 0,
            payrange: 'NoOption'
        });
    
    };

    const handleFinish = () =>{ 
        if (true) {
            if (!step1data.name || !step1data.age || step1data.status === 'NoOption') {
                alert('Please fill in all fields in Personal Details');
                return;
            }
        }
        if (true) {
            if (!step2data.role || !step2data.experience || step2data.payrange === 'NoOption') {
                alert('Please fill in all fields in Professional Details');
                return;
            }
        }
        
        alert('Finishing...');
        
        handleReset();
    }

    return (
        <div>
            <div className='Box'>
                <h2>Hello, {name}</h2>
                <hr />
                <br />

                <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            if (isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}>Reset</Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    Back
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                
                                    {activeStep === steps.length - 1 ? 
                                    <Button onClick={handleFinish}> Finish </Button> 
                                                        : 
                                    <Button onClick={handleNext}> Next </Button>}
                            </Box>
                        </React.Fragment>
                    )}
                </Box>
            </div>


            <div className='steppers'>
            {activeStep === 0 &&
                <Stepper1 data={step1data} handleChange={handleStep1Data} />
            }

            {activeStep === 1 &&
                <Stepper2 data={step2data} handleChange={handleStep2Data} />
            }

            {activeStep === 2 &&
                <Stepper3 />
            }
            </div>

        </div>
    )
}

export default Home;