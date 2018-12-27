# IntroductionToProbabilityPy

Python equivalent to the R code sections in Blitzstein and Hwang's [Introduction To Probability, 1st Edition](https://www.crcpress.com/Introduction-to-Probability/Blitzstein-Hwang/p/book/9781466575578)

## Requirements

#### To run these Jupyter notebooks, you need:

* [Python 3.5](https://www.python.org/downloads/release/python-350/) or greater

The [Anaconda Python distribution](https://www.anaconda.com/download/) comes highly recommended, as it includes Python, the conda package manager, the Spyder integrated development environment, and a whole universe of Python packages for mathematics and engineering, including NumPy, SciPy, and Jupyter. 

#### Required Python packages:

* [Jupyter](https://jupyter-notebook.readthedocs.io/en/stable/) 
* [NumPy](https://www.scipy.org/scipylib/download.html)
* [SciPy](https://scipy.org/install.html)
* [ipywidgets](https://ipywidgets.readthedocs.io/en/stable/) ... interactive game for the Monty Hall problem in Chapter 2
  
  ![Ch 2 interactive widget for Monty Hall problem](https://github.com/buruzaemon/IntroductionToProbabilityPy/blob/master/assets/monty_widget.png)

#### Other requirements / dependencies

* [D3.js](https://d3js.org/) on the [Google Hosted Libraries content delivery network](https://developers.google.com/speed/libraries/#d3js) ... interactive visualization for the Central Limit Theorem

  ![Ch 10 interactive visualization for CLR](https://github.com/buruzaemon/IntroductionToProbabilityPy/blob/master/assets/clr_visualization.png)


## Executing these notebooks locally
After installing Python and Jupyter, navigate to this project's home directory where these notebooks are saved, open up a command window or shell interface, and type the following command:

     jupyter notebook

Your default browser should open up to show the Notebook Dashboard at `http://localhost:8888`.

These notebooks have been confirmed to run on:

* Chrome 71.0.3578.98 (official build), 64-bit on Windows 10
* Firefox 64.0, 64-bit on Windows 10


_Internet Explorer is not recommended!__

## View these notebooks on NBViewer

* [Ch1](http://bit.ly/2zSHKBP) - Probability and Counting: Vectors; Factorials and binomial coefficients; Sampling and simulation; Matching problem simulation; Birthday problem calculation and simulation
* [Ch2](http://bit.ly/2pTq8QG) - Conditional Probability: Simulating the frequentist interpretation; Monty Hall simulation
* [Ch3](http://bit.ly/2pYpXU7) - Random Variables and their Distributions: Distributions in SciPy; Binomial distribution; Hypergeometric distribution; Discrete distributions with finite support 
* [Ch4](http://bit.ly/2yFDNzu) - Expectation: Geometric, Negative Binomial, and Poisson; Matching simulation; Distinct birthdays simulation
* [Ch5](http://bit.ly/2qWXlLp) - Continuous Random Variables: Uniform, Normal and Exponential distributions; Plots in Matplotlib; Universality with Logistic; Poisson process simulation 
* [Ch6](http://bit.ly/2zVZQT0) - Moments: Functions; Moments; Medians and modes; Dice simulation
* [Ch7](http://bit.ly/2zYpG9f) - Joint Distributions: Multinomial; Multivariate Normal; Cauchy
* [Ch8](http://bit.ly/2Eu3rvp) - Transformations: Beta and Gamma distributions; Convolution of Uniforms; Bayes' billiards; Simulating order statistics
* [Ch9](http://bit.ly/2LgIHIg) - Conditional Expectation: Mystery prize simulation; Time until HH vs. HT; Linear regression 
* [Ch10](http://bit.ly/2Ghzz7x) - Inequalities and Limit Theorems: Jensen's inequality; Visualization of the law of large numbers; Monte Carlo estimate of &pi;; Visualizations of the central limit theorem; Chi-Square and Student-<i>t</i> distributions
* [Ch11](http://bit.ly/2EBtiSz) - Markov Chains: Matrix calculations; Gambler's ruin; Simulating from a finite-state Markov chain 
* [Ch12](http://bit.ly/2LmpPYk) - Markov Chain Monte Carlo: Metropolis-Hastings; Gibbs
* [Ch13](http://bit.ly/2S7t1tr) - Poisson Processes: 1D Poisson process; Thinning; 2D Poisson process 

----
&copy; Blitzstein, Joseph K.; Hwang, Jessica. Introduction to Probability (Chapman & Hall/CRC Texts in Statistical Science).
