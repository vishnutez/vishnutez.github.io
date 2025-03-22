## Variational Autoencoder (VAE)


Let $p_X(\cdot; \theta)$ be the generative model over $\mathbb{R}^d$ of the form $p_{X}(x; \theta) = \int_z p_Z(z)p_{X\mid Z}(x \mid z; \theta) dz$, where $p_Z$ is the latent distribution over $\mathbb{R}^\ell$ (for $\ell < d$) and $p_{X\mid Z}$ is the conditional distribution, both of which are assumed to be tractable (and simple, for example, parameterized Gaussian or Bernoulli). The objective of generative modelling is
$$
\begin{equation}
    \max_\theta {\rm LL}(\theta) = \max_\theta \mathbb{E}_{x \sim p_X} [\ln p_X(x; \theta)].
\end{equation}
$$

For a data point $x \in \mathbb{R}^d$, and for any variational distribution over the latents $q_{Z \mid X}(\cdot \mid x, \varphi)$, we have that
$$
\begin{equation}
    \ln p_X(x; \theta) = {\rm ELBO}(\theta, \varphi; x) + {\rm KL}(q_{Z\mid X}(\cdot \mid x; \varphi) \Vert p_{Z \mid X}(\cdot \mid x; \theta)) \ge {\rm ELBO}(\theta, \varphi; x),
\end{equation}
$$
due to the non-negativity of KL-divergence, for any $\varphi$. Therefore, we can instead define the following objective as
$$
\begin{equation}
     \max_\theta {\rm LL}(\theta) \ge \max_{\theta, \varphi} {\rm ELBO}(\theta, \varphi) = \mathbb{E}_{X \sim p_X}[{\rm ELBO}(\theta, \varphi; x)].
\end{equation}
$$

The term is called the evidence lower bound (ELBO) and is given by
$$
\begin{align}
    {\rm ELBO}(\theta, \varphi; x) &\triangleq \int_z q_{Z\mid X}(z\mid x; \varphi) \ln \left( \frac{p_{X\mid Z}(x\mid z; \theta) p_{Z}(z) }{q_{Z\mid X}(z\mid x; \varphi)}\right) dz \\
    &= \mathbb{E}_{z \sim q_{Z\mid X}(\cdot \mid x; \varphi)}[\ln p_{X\mid Z}(x \mid z; \theta)] - {\rm KL}(q_{Z\mid X}(\cdot \mid x; \varphi) \Vert p_Z(\cdot)).
\end{align}
$$

Let the variational distribution be Gaussian distribution with independent components, i.e., $q_{Z \mid X}(z \mid x; \varphi) = \prod_{j=1}^\ell \mathcal{N}(z_j \mid \mu_j(x; \varphi), \sigma_j^2(x; \varphi))$. Then, the KL term can be computed analytically as

$$
\begin{align}
    {\rm KL}(q_{Z\mid X}(\cdot \mid x; \varphi) \Vert p_Z(\cdot)) = -\frac{1}{2} \sum_{j=1}^\ell (1+\ln (\sigma_j^2(x; \varphi)) + \mu_j^2(x;\varphi) - \sigma_j^2(x; \varphi)).
\end{align}
$$

and the first term can be written, using a reparametrization trick, as
$$
\begin{align}
    \mathbb{E}_{z \sim q_{Z\mid X}(\cdot \mid x; \varphi)}[\ln p_{X\mid Z}(x \mid z; \theta)] = \mathbb{E}_{\varepsilon \sim \mathcal{N}(\cdot \mid 0, I_\ell)}[\ln p_{X\mid Z}(x \mid \mu(x; \varphi) +\varepsilon \odot \sigma(x; \varphi); \theta)].
\end{align}
$$
Therefore, the overall objective can be written as
$$
\begin{align}
    \max_{\theta, \varphi} {\rm ELBO}(\theta, \varphi) = \max_{\theta, \varphi} \mathbb{E}_{x \sim p_X, \varepsilon \sim \mathcal{N}(\cdot\mid 0, I_\ell)} \left[ \ln p_{X\mid Z}(x \mid \mu(x; \varphi) +\varepsilon \odot \sigma(x; \varphi); \theta) +  \frac{1}{2} \sum_{j=1}^\ell (1+\ln (\sigma_j^2(x; \varphi)) + \mu_j^2(x;\varphi) - \sigma_j^2(x; \varphi))    \right].
\end{align}
$$

### KL of Gaussian distributions

We can find the KL divergence as

<!-- $$
\begin{align}   
    {\rm KL}(\mathcal{N}(\cdot \mid \mu_1, \sigma_1^2) \Vert \mathcal{N}(\cdot \mid \mu_2, \sigma_2^2)) = \frac{1}{\sqrt{2\pi} \sigma_1} \int_z \left(\frac{(z-\mu_2)^2}{2\sigma_2^2}-\frac{(z-\mu_1)^2}{2\sigma_1^2} \right) \exp \left( -\frac{(z-\mu_1)^2}{2\sigma_1^2} \right) dz
\end{align}
$$ -->


$$
\begin{align}   
    {\rm KL}(\mathcal{N}(\cdot \mid \mu_1, \sigma_1^2) \Vert \mathcal{N}(\cdot \mid \mu_2, \sigma_2^2)) 
    &= \mathbb{E}_{z \sim \mathcal{N}(\cdot \mid \mu_1, \sigma_1^2)}\left[\frac{(z-\mu_2)^2}{2\sigma_2^2}-\frac{(z-\mu_1)^2}{2\sigma_1^2} \right] \\
    &= \frac{(\mu_1-\mu_2)^2}{2\sigma_2^2}
\end{align}
$$


## Connection to Expectation-Maximization (EM)

Consider an EM algorithm to find the parameters $\theta$ to maximize the data log-likelihood 
$$
\max_\theta {\rm LL}(\theta) = \mathbb{E}_{x \sim p_X}[\ln p_X(x; \theta)].
$$.

Let $q_{Z \mid X}(\cdot \mid x; \varphi)$ be a (parameterized) distribution over the latent parameters. Then, the E-step is given by
$$
    \mathbb{E}_{x \sim p_X}[\ln p_X(x; \theta)] = \mathbb{E}_{x \sim p_X, z \sim q_{Z \mid X}(\cdot \mid x; \varphi)}[\ln p_X(x; \theta)]
$$











<!-- Let $p_X(\cdot; \theta)$ be the parameterized data distribution of the form $p_{X}(x; \theta) = \int_z p_Z(z)p_{X\mid Z}(x \mid z; \theta) dz$, where $p_Z$ is the latent distribution and $p_{X\mid Z}$ is the conditional distribution, both of which are assumed to be tractable (and simple). Let $\mu_\theta(z)$ be a function to output some parameter of a variational distribution to approximate the conditional distribution $p_{X \mid Z}(\cdot \mid z; \theta)$. Let the latent distribution be a low-dimensional Gaussian $p_Z(z) = \mathcal{N}(z \mid 0, I)$. For an arbitrary distribution over latent $q_Z(z)$, we have
$$
\begin{equation}
    \ln p_X(x; \theta) = \mathcal{L}(\theta; x, q_Z) + \mathrm{KL}(q_Z(\cdot) \lVert p_{Z \mid X}( \cdot \mid x; \theta) ),
\end{equation}
$$
whre $\mathcal{L}$ is the evidence lower-bound (ELBO) or the variational lower bound, given by
$$
\mathcal{L}(\theta; x, q_Z) = \int_{z} q_Z(z) \ln \left( \frac{p_{X\mid Z}(x \mid z; \theta)p_Z(z)}{q_Z(z)}  \right) dz.
$$

The goal is to find $q_Z$ such that the gap $\ln p_X(x; \theta) - \mathcal{L}(\theta; x, q_Z) = \mathrm{KL}(q_Z(\cdot) \rVert p_{Z \mid X}(\cdot \mid x; \theta)) \ge 0$ is minimized.

Given $N$ i.i.d. data points $\mathcal{D}^n \triangleq \{x^1, \dots, x^N\}$, one can compute the data log-likelihood as
$$
\ln p_{X}(\mathcal{D}^n; \theta) = \sum_{n=1}^N \mathcal{L}(\theta; x^n, q_{Z}^n) + \sum_{n=1}^N \mathrm{KL}(q_{Z}^n(\cdot) \lVert p_{Z \mid X}(\cdot \mid x^n; \theta)),
$$
The posterior distribution $p_{Z\mid X}$, due to Bayes' theorem, is given by
$$
\begin{equation}
    p_{Z\mid X}(z \mid x^n, \theta) = \frac{p_Z(z) p_{X\mid Z}(x^n \mid z; \theta)}{p_X(x^n; \theta)},
\end{equation}
$$
but the denominator is intractable. Thus, we need some approximation for the above posterior.

### Amortized Inference

Instead of approximating $p_{Z \mid X}(\cdot \mid x^n; \theta)$ for each data point $x^n$, we train a single **encoder network** $q_{Z \mid X}(\cdot \mid x; \varphi)$ that takes $x$ as the input as produces the posterior estimate of the latent.

A typical choice for approximating posterior distribution for $\ell$-dimensional latent is Gaussian with diagonal covariance:
$$
q_{Z \mid X}(z \mid x; \varphi) = \prod_{j=1}^\ell \mathcal{N}(z_j \mid \mu_j(x; \varphi), \sigma^2_j(x, \varphi)).
$$ -->
