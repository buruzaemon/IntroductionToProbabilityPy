# IntroductionToProbabilityPy

Jupyter notebooks with the Python equivalent to the R code sections in Blitzstein and Hwang's [Introduction To Probability, 1st Edition](https://www.crcpress.com/Introduction-to-Probability/Blitzstein-Hwang/p/book/9781466575578)

## Requirements

#### These Jupyter notebooks have been verified on the following Python versions:

* [Python 3.5](https://docs.python.org/3.5/whatsnew/3.5.html)
* [Python 3.6](https://docs.python.org/3.6/whatsnew/3.6.html)
* [Python 3.7](https://docs.python.org/3.7/whatsnew/3.7.html)

The [Anaconda Python distribution](https://www.anaconda.com/download/) comes highly recommended, as it includes Python, the conda package manager, the Spyder integrated development environment, and a whole universe of Python packages for mathematics and engineering, including NumPy, SciPy, Matplotlib and Jupyter.

#### Minimum required Python packages:

* [Jupyter](https://jupyter-notebook.readthedocs.io/en/stable/) (v1.0.0)
* [NumPy](https://www.scipy.org/scipylib/download.html) (v1.13.0)
* [SciPy](https://scipy.org/install.html) (v0.19.1)
* [Matplotlib](https://matplotlib.org/index.html) (v2.1.0)
* [ipywidgets](https://ipywidgets.readthedocs.io/en/stable/) (v7.4.2) ... interactive game for the Monty Hall problem in Chapter 2
  
  ![Ch 2 interactive widget for Monty Hall problem](https://github.com/buruzaemon/IntroductionToProbabilityPy/blob/master/assets/monty_widget.png)

#### Other requirements / dependencies

* [D3.js](https://d3js.org/) (v5.7.0) on the [Google Hosted Libraries content delivery network](https://developers.google.com/speed/libraries/#d3js) referenced from the interactive visualization for the Central Limit Theorem in Chapter 10

  ![Ch 10 interactive visualization for CLR](https://github.com/buruzaemon/IntroductionToProbabilityPy/blob/master/assets/clr_visualization.png)


## Executing these notebooks locally
After installing Python and Jupyter, navigate to this project's home directory where these notebooks are saved, open up a command window or shell interface, and type the following command:

     jupyter notebook

Your default browser will open up to show the Notebook Dashboard at `http://localhost:8888`.

[MathJax](https://www.mathjax.org/#gettingstarted) is the javascript library Jupyter uses to render math/![LaTeX](![Ch 10 interactive visualization for CLR](https://github.com/buruzaemon/IntroductionToProbabilityPy/blob/master/assets/LaTeX.png). 

These notebooks have been confirmed to run on:

* Chrome 71.0.3578.98 (official build), 64-bit and Firefox 64.0, 64-bit on Windows 10
* Chrome 69.0.3497.100 (official build, 64-bin and Firefox 52.8.0, 64-bin on Windows 7
* Chrome 71.0.3578.98 (official build), 64-bit; Firefox 64.0 (64-bit); and Safari 12.0.2 (13606.3.4.1.4) on macOS (High Sierra, v10.13.6)


_Internet Explorer is not recommended!_

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
* [Appendix B](http://bit.ly/2I00c1x) - Python / NumPy / SciPy

----
&copy; Blitzstein, Joseph K.; Hwang, Jessica. Introduction to Probability (Chapman & Hall/CRC Texts in Statistical Science).
