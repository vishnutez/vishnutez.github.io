<span style="font-family:verdana">

# Introduction to SDEs for Generative Modelling


## Start with ODEs
Consider an **ordinary differential equation (ODE)** for the dynamics of a process $X_\bullet$ as a function of _time_ $t$:
$$ 
\frac{d X_t}{d t} = f(X_t, t),
$$
which can be written in **differential form**:
$$
d X_t = f(X_t, t) dt,
$$
or the **integral form**:
$$
X_t = X_0 + \int_0^t f(X_s, s) ds,
$$
where $f(X_t, t), X_t \in \mathbb{R}^d$ for all $t$.

For _small_ $h> 0$, the forward evolution of $X_\bullet$ given $X_0$ can be approximately written as:
$$
X_{(k+1)h} = X_{kh} + f(X_{kh}, kh) h, \quad k \ge 0.
$$

Similarly, given an arbitrary point $X_T$, the backward evolution is, again, given by
$$
X_{(k-1)h} = X_{k h} - f(X_{kh}, k h) h.
$$


## Dive into SDEs
A **stochastic differential equation (SDE)** in differential form is given by
$$
dX_t = f(X_t, t) dt + g(t) dW_t,
$$
where $X_\bullet$ is a random process, and $W_\bullet$ is a Wiener process. This can be written as the limiting equation of
$$
\begin{equation}
X_{(k+1)h} = X_{kh} + f(X_{kh}, kh) h + g(kh)Z_{kh}\sqrt{h},
\end{equation}
$$
where $Z_{kh} \sim \mathcal{N}(0, I)$ is an isotropic Gaussian random variable that is independent across $k$, and the convergence is in the sense of $L^1$ as $h \to 0$.

## Marginal Densities and Fokker-Planck Equation

The maginal density $p_t$ of $X_t$ be  with respect to the Lebesgue measure satisfies the **Fokker-Planck (FP)** ODE given by:
$$
\begin{equation}
\partial_t (p_t(x)) = -\partial_x (f(x, t) p_t(x)) + \frac{g^2(t)}{2} \partial_x^2(p_t(x)).
\end{equation}
$$

To illustrate the proof of the above in the simple case of $d=1$, for any bounded continuous function $\varphi(\cdot)$, we have for any $h > 0$:
$$
\begin{aligned}
\mathbb{E}[\varphi(X_{t+h})] 
&= \mathbb{E}[\varphi(X_t + f(X_t, t)h + g(t)Z_t\sqrt{h} )] \\
&= \mathbb{E}[\varphi(X_t) + \varphi'(X_t) (f(X_t, t)h + g(t)Z_t\sqrt{h}) + \frac{g^2(t) Z_t^2 h}{2} \varphi''(X_t) + o(h)] \\
&= \mathbb{E}[\varphi(X_t)] + \mathbb{E}[\varphi'(X_t) f(X_t, t)h] + \frac{g^2(t) h}{2} \mathbb{E}[\varphi''(X_t)] + \mathbb{E}[o(h)].
\end{aligned}
$$
and therefore, we can write
$$
\begin{aligned}
\partial_t \left( \mathbb{E}[ \varphi(X_t)] \right) 
&= \lim_{h\to 0} h^{-1} (\mathbb{E}[\varphi(X_{t+h})] - \mathbb{E}[\varphi(X_t)]) \\
&= \mathbb{E}[\varphi'(X_t) f(X_t, t)] + \frac{g^2(t)}{2} \mathbb{E}[\varphi''(X_t)].
\end{aligned}
$$

Finally, by assuming that $(f_0 f_1)(x) = 0$ as $|x| \to \infty$, we get $0=(f_0 f_1)(\infty)-(f_0 f_1)(-\infty) = \int (f_0 f_1)' (x) = \int f_0'(x) f_1(x) + \int f_0(x) f_1'(x) dx$, and so the above equation becomes:

$$
\begin{aligned}
\partial_t \left( \mathbb{E}[ \varphi(X_t)] \right) &= \partial_t \left(\int \varphi(x) p_t(x)\right) \stackrel{(i)}{=} \int \varphi(x) \partial_t(p_t(x)) dx \\
&= \int \varphi'(x) f(x, t) p_t(x) dx + \frac{g^2(t)}{2} \int \varphi''(x) p(x) dx \\
&= \int \varphi(x) \left( -\partial_x(f(x, t)p_t(x)) + \frac{g^2(t)}{2} \partial_x^2 (p_t(x)) \right) dx,
\end{aligned}
$$
where we exchanged the derivative and the integral in (i). Comparing the integrands gives the desired result. In higher dimensions, the forward FP equation becomes
$$
\begin{equation}
\partial_t p_t(x) = -\nabla_x \cdot (f(x, t)p_t(x)) + \frac{g^2(t)}{2} \nabla^2_x (p_t(x)).
\end{equation}
$$

## Reversing the Flow of Time in SDEs

If the time $t$ runs backward, then using the derivation in the last section, the backward FP equation becomes
$$
\partial_t p_t(x) = -\nabla_x \cdot (f(x, t)p_t(x)) - \frac{g^2(t)}{2} \nabla_x^2(p_t(x)).
$$


For the stochastic process $X_\bullet$ defined by the forward SDE
$$
d X_t = f(X_t, t) dt + g(t) d W_t, \quad X_0 \sim p_0
$$
with maginals $X_t \sim p_t$, for $0\le t\le T$, there is a reverse-time process $\overleftarrow{X}_\bullet$ defined by the reverse-time SDE running **backward** in time
$$
d\overleftarrow{X}_t = (f(\overleftarrow{X}_t, t)- g^2(t)\nabla_x \log p_t(\overleftarrow{X}_t)) dt + g(t) d\overleftarrow{W}_t, \quad X_T \sim p_T.
$$ 

Note that $\overleftarrow{p}_t = p_t$ solves the backward FP equation as shown below:

$$
\begin{align}
    \partial_t \overleftarrow{p}_t(x) &= -\nabla_x \cdot ((f(x, t) -g^2(t)\nabla_x \log p_t(x)) \overleftarrow{p}_t(x)) - \frac{g^2(t)}{2} \nabla_x^2 (\overleftarrow{p}_t(x)) && (\mathrm{Backward~FP}) \nonumber \\
    &= -\nabla_x \cdot ((f(x, t) -g^2(t)\nabla_x \log p_t(x)) p_t(x)) - \frac{g^2(t)}{2} \nabla_x^2 (p_t(x)) && (\overleftarrow{p}_t = p_t) \nonumber \\
    &= -\nabla_x \cdot (f(x, t) p_t(x)) + g^2(t) \nabla_x \cdot (p_t(x) \nabla_x \log p_t(x)) - \frac{g^2(t)}{2} \nabla_x^2 (p_t(x)) \nonumber \\
    &= -\nabla_x \cdot (f(x, t) p_t(x)) + \frac{g^2(t)}{2} \nabla_x^2(p_t(x)) = \partial_t p_t(x) && (\mathrm{Forward~FP}).
\end{align}
$$

Therefore, if the solution of the backward FP is unique, which can be guaranteed under mild assumptions on $p_0, f, g$, then the marginals of the forward and the backward process must be the same.

Simulating the reverse process requires the knowledge of what is known as the **score** function $\nabla_x \log p_t(x)$ of the marginal densities $p_t$ for the forward process. Thus, for _small_ $h > 0$, we can approximately sample from the reverse process, $\overleftarrow{X}_{\lceil T/h \rceil h} \sim p_T$,
$$
\begin{equation}
    \overleftarrow{X}_{(k-1)h} = \overleftarrow{X}_{kh}-(f(\overleftarrow{X}_{kh}, kh)-g^2(kh) \nabla_x \log p_t(\overleftarrow{X}_{kh})) h + g(kh)\sqrt{h} Z_{kh},
\end{equation}
$$
where $Z_{kh} \sim \mathcal{N}(0, I)$ is an isotropic Gaussian random variable, independent across $k\ge 0$.

## Learning to Score

In a diffusion model, $X_0 \sim p_0$ is the distribution of the data, and $X_T \sim \mathcal{N}(0, I)$. Specifically, $X_t = \alpha_t X_0 + \sigma_t \varepsilon_t$ for some $\sigma_t^2 \uparrow 1, \alpha_t \downarrow 0$, $X_0 \sim p_0, \varepsilon_t \sim \mathcal{N}(0, I)$. Let $s_\theta(x, t)$ be the score network that learns the marginal score $\nabla_x \log p_t(x)$, then we can train a network $s_\theta(x, t)$ by minimizing **explicit score-matching** loss
$$
\mathcal{L}_{\mathrm{ESM}}(\theta) = \mathbb{E}_{t, X_t}[\lVert s_\theta(X_t, t) - \nabla_x \log p_{t}(X_t) \rVert _2^2].
$$
Since $p_t$ is unknown, the above loss is intractable. However, it can be shown that the above loss is equivalent to minimizing the following **denoising score-matching** loss:
$$
\mathcal{L}_{\mathrm{DSM}}(\theta) = \mathbb{E}_{t, X_0, X_t}[\lVert s_\theta(X_t, t) - \nabla_x \log p_{t\mid 0}(X_t \mid X_0) \rVert _2^2].
$$

The DSM loss is very practical as $p_{t\mid 0}(x \mid x_0) = \mathcal{N}(x \mid \alpha_t x_0, \sigma_t^2)$ and so the conditional score given $X_0 = x_0$ admits a closed-form expression 
$$
\nabla_x \log p_{t\mid 0}(x \mid x_0) = \frac{1}{\sigma_t^2} (\alpha_t x_0-x)
$$. 


To see the equivalence, expand the quadratic form and notice that the bilinear terms coincide as follows:
$$
\begin{align*}
\mathbb{E}_{X_0, X_t}[ \langle s_\theta(X_t, t), \nabla_x \log p_{t\mid 0}(X_t \mid X_0)\rangle] 
&= \int_{x} \int_{x_0} \langle s_\theta(x, t), \nabla_x \log p_{t\mid 0}(x \mid x_0) \rangle p_0(x_0) p_{t\mid 0}(x\mid x_0) dx_0 dx  \\
&= \int_{x} \left\langle s_\theta(x, t), \int_{x_0} \nabla_x p_{t\mid 0} (x \mid x_0) p(x_0) \right\rangle d x_0 d x \\
&= \int_{x} \left\langle s_\theta(x, t), \nabla_x \left( \int_{x_0}  p_{t\mid 0} (x \mid x_0) p(x_0) \right\rangle d x_0 \right) d x \\
&= \int_{x} \langle s_\theta(x, t), \nabla_x p_t(x) \rangle d x \\
&= \int_{x} \langle s_\theta(x, t), \nabla_x \log p_t(x) \rangle p_t(x) d x = \mathbb{E}_{X_t}[\langle s_\theta(X_t, t), \nabla_x \log p_t(X_t) \rangle].
\end{align*} 
$$

If the parametric class is rich enough, then the minimizer of the above loss is given by
$$
\begin{aligned}
    s_{\theta^*}(x, t) = \nabla_x \log p_t(x)
    &= \mathbb{E}_{X_0, X_t}[\nabla_x \log p_{t\mid 0}(X_t\mid X_0) \mid X_t = x] \\
    &= \frac{1}{\sigma_t^2} \mathbb{E}_{X_0, X_t}[X_t-\alpha_t X_0 \mid X_t = x] \\
    &= \frac{1}{\sigma_t} \mathbb{E}_{X_0, X_t}[\varepsilon_t(X_0, X_t = x) \mid X_0], 
\end{aligned}
$$
where $X_t = \alpha_t X_0 + \sigma_t \varepsilon_t(X_0, X_t)$ is the noise added to get $X_t$. Therefore, we can train to minimize the noise prediction loss instead as 
$$
    \mathcal{L}_{\rm NP}(\theta) = \mathbb{E}_{t \sim \mathcal{U}[0, T], X_0 \sim p_X, \varepsilon_t \sim \mathcal{N}(0, I)}[\lVert \varepsilon_\theta(X_t = \alpha_t X_0 + \sigma_t \varepsilon_t, t) - \varepsilon_t \rVert _2^2],
$$
whose minimizer, for a rich enough function class, is given by
$$
    \varepsilon_{\theta^*}(x, t) = \mathbb{E}_{X_0, X_t}[\varepsilon_t(X_0, X_t = x) \mid X_0].
$$





## Equivalence to Denoising Diffusion Probabilistic Model (DDPM)

In DDPM, we follow a discretized form of the forward SDE and obtain $X_{(k+1)h} = X_{kh}\sqrt{1-\beta_{kh}}  + Z_{kh}\sqrt{\beta_{kh}}$, where $Z_{kh} \sim \mathcal{N}(0, I)$. Comparing with the discretized version, we get that
$$
g(kh)\sqrt{h} = \sqrt{\beta_{kh}}, \quad f(X_{kh}, kh) = -h^{-1} X_{kh}(1-\sqrt{1-\beta_{kh}}).
$$

Define $\bar{\beta}(t) \triangleq \lim_{h \to 0, kh \to t} h^{-1} \beta_{kh}$, and assume that it is finite for all $0\le t\le T$. Then, $\beta_{kh} =\bar{\beta}(t) h + o(h)$ and so we have that $\sqrt{1-\beta_{kh}} = 1 - \frac{1}{2}\beta_{kh} + o(\beta_{kh}) = 1-\frac{1}{2}\bar{\beta}(t) h + o(h) $, whence
$$
g(t) = \lim_{h\to 0} \sqrt{\frac{\beta_{kh}}{h}} = \sqrt{\bar{\beta}(t)}, \quad f(X_t, t) = -\frac{\bar{\beta}(t)}{2}X_t.
$$
Therefore, the SDE becomes
$$
dX_t = -\frac{\bar{\beta}(t)}{2} X_t dt + \sqrt{\bar{\beta}(t)}~dW_t.
$$
The discretized form is
$$
X_{(k+1)h} = X_{kh}\left( 1 - \frac{1}{2} h\bar{\beta}(kh) \right) + Z_{kh} \sqrt{h \bar{\beta}(kh)} \stackrel{(h\to 0, kh\to t, p_t)}{=} X_{kh} \sqrt{1-\beta_{kh}} + Z_{kh}\sqrt{\beta_{kh}}.
$$



</span>